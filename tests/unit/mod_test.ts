import members from "../members.ts";

members.test("-", () => {
  console.log("mod.ts");
});

members.test("Drash.addMember(): class", () => {
  class SomeCoolService {
    public coolify() {
      return "OK!";
    }
  }
  members.Drash.addMember("SomeCoolService", SomeCoolService);
  let expected = "OK!";
  let service = new members.Drash.Members.SomeCoolService();
  members.assert.equal(service.coolify(), expected);
});

members.test("Drash.addMember(): function", () => {
  let SomeCoolServiceFunction = function(arg: string): string {
    return `You specified the following arg: ${arg}`;
  };
  members.Drash.addMember("SomeCoolServiceFunction", SomeCoolServiceFunction);
  let expected =
    "You specified the following arg: All your base are belong to us!";
  let actual = members.Drash.Members.SomeCoolServiceFunction(
    "All your base are belong to us!"
  );
  members.assert.equal(actual, expected);
});

members.test("Drash.addMember(): object", () => {
  let SomeCoolDictionary = {
    "Item 1": {
      definition: "This is Item 1. It is cool."
    },
    "Item 2": {
      definition: "This is Item 2. It is super cool."
    }
  };
  members.Drash.addMember("SomeCoolDictionary", SomeCoolDictionary);
  let expected = {
    "Item 1": {
      definition: "This is Item 1. It is cool."
    },
    "Item 2": {
      definition: "This is Item 2. It is super cool."
    }
  };
  let actual = members.Drash.Members.SomeCoolDictionary;
  members.assert.equal(actual, expected);
});

members.test("Drash.addMember(): types", () => {
  let data = {
    myBooleanTrue: true,
    myBooleanFalse: false,
    myString: "string",
    myStringEmpty: "",
    myNull: null,
    myUndefined: undefined
  };

  for (let key in data) {
    members.Drash.addMember(key, data[key]);
  }

  for (let key in data) {
    members.assert.equal(members.Drash.Members[key], data[key]);
  }
});

members.test("Drash.addLogger(): class", () => {
  const testLogger = new members.Drash.CoreLoggers.FileLogger({
    enabled: true,
    level: "debug"
  });
  members.Drash.addLogger("TestLogger", testLogger);
  let expected = {
    "TestLogger": testLogger
  };
  members.assert.equal(members.Drash.Loggers, expected);
});

members.test("Drash.addLogger(): names must be unique", () => {
  const testLogger = new members.Drash.CoreLoggers.FileLogger({
    enabled: true,
    level: "debug"
  });
  members.assert.throws(
    (): void  => {
      members.Drash.addLogger("TestLogger", testLogger);
      members.Drash.addLogger("TestLogger", testLogger);
    },
    members.Drash.Exceptions.NameCollisionException,
    'Loggers must be unique: "TestLogger" found.'
  );
});

