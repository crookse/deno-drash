/**
 * @memberof Drash.Exceptions
 * @class NameCollisionException
 *
 * @description
 *     This class gives you a way to throw name collision errors.
 *
 *     This class extends `Error`.
 */
export default class NameCollisionException extends Error {
    /**
     * @description
     *     A property to hold the error message associated with this
     *     exception.
     *
     * @property string message
     */
    public message: string;
  
    /**
     * @description
     *     Construct an object of this class.
     *
     * @param string message
     *     (optional) The exception message.
     */
    constructor(message: string) {
      super(message);
      this.message = message;
    }
  }
  