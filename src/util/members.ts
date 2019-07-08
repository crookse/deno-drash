/// @doc-blocks-to-json members-only

import { IO } from "../../system.ts";

/**
 * @memberof Drash.Util.Exports
 * @interface ColorizeOptions
 *
 * @description
 *     An interface to hold the `colorize()` function's options.
 */
export interface ColorizeOptions {
  color?: string;
  background?: string;
  style?: string;
}

/**
 * @memberof Drash.Util.Exports
 * @function colorize
 *
 * @description
 *     A util function that helps colorize text in the console.
 *
 * @param string message
 *     The text to colorize.
 * @param ColorizeOptions options
 *     See `Drash.Utils.Exports.ColorizeOptions` interface.
 *
 * @return string
 *     Returns the colorized message.
 */
export function colorize(message: string, options: ColorizeOptions): string {
  /* eslint key-spacing: ["off"] */
  // Foreground colors
  let colors = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    default: "\x1b[39m"
  };

  // Background colors
  let backgrounds = {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    default: "\x1b[49m"
  };

  // Attributes
  let attributes = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    standout: "\x1b[3m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m"
  };

  // Add the color
  if (options["color"] && colors[options["color"]]) {
    message = colors[options["color"]] + message;
  }

  // Add the background
  if (options["background"] && backgrounds[options["background"]]) {
    message = backgrounds[options["background"]] + message;
  }

  // Add the attribute
  if (options["style"] && attributes[options["style"]]) {
    message = attributes[options["style"]] + message;
  }

  // Make sure to reset text color, background, and attributes.
  message =
    message + colors["default"] + backgrounds["default"] + attributes["reset"];

  return message;
}

/**
 * @memberof Drash.Util.Exports
 * @function getFileSystemStructure
 *
 * @description
 *     Get the filesystem structure of the directory (recursively).
 *
 * @return string
 *     Returns the following object:
 *     {
 *       basename: "filename",
 *       extension: extension, // does not account for .min.extension or similar extensions
 *       filename: filename.extension,
 *       path: "/path/to/the/file/dir/filename.extension",
 *       pathname: "/path/to/the/file/dir",
 *       snake_cased: filename_extension
 *     }
 */
export function getFileSystemStructure(dir: string): any {
  let files = [];

  for (const fileInfo of IO.walkSync(dir)) {
    let filename = fileInfo.filename;
    let path = filename;
    let filenameSplit = filename.split("/");
    filename = filenameSplit[filenameSplit.length - 1];
    // FIXME(crookse)
    // There's a better way to do this, but it's like 0800 right now and I
    // haven't had a full cup of coffee yet. -___________-
    // Also, we do a + 1 to the filename.length because we want to remove the
    // trailing slash.
    let pathname = path.slice(0, -(filename.length + 1));
    files.push({
      // filename
      basename: filename.split(".")[0],
      // extension
      extension: filename.split(".")[1], // This doesn't account for .min. type files
      // filename.extension
      filename: filename,
      // /path/to/the/file/dir/filename.extension
      path: path,
      // /path/to/the/file/dir
      pathname: pathname,
      // filename_extension
      snake_cased: filename.replace(".", "_")
    });
  }

  return files;
}
