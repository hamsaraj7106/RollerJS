import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Roller tests", ()=> {
  test("Description", () => {
  });
});

describe("Roller", () => {
  describe("constructor", () => {
    test("should create a six-sided die if no faces are provided", () => {
      const roller = new Roller(0);
      expect(roller["_faces"]).toBe(6);
    });

    test("should create a die with the specified number of faces", () => {
      const roller = new Roller(10);
      expect(roller["_faces"]).toBe(10);
    });

    test("should default to a six-sided die if an invalid number of faces is provided", () => {
      const roller = new Roller(-1);
      expect(roller["_faces"]).toBe(6);
    });
  });

  describe("roll", () => {
    test("should record a valid roll and update the distribution", () => {
      const roller = new Roller(4);
      expect(roller.roll(2)).toBe(2);
      expect(roller["_last"]).toBe(2);
      expect(roller.distribution().get(2)).toBe(1);
    });

    test("should not record an invalid roll and return 0", () => {
      const roller = new Roller(4);
      expect(roller.roll(5)).toBe(0);
      expect(roller["_last"]).toBe(0);
      expect(roller.distribution().get(5)).toBe(undefined);
    });
  });

  describe("last", () => {
    test("should return the last roll", () => {
      const roller = new Roller(6);
      expect(roller.roll(3)).toBe(3);
      expect(roller.last()).toBe(3);
    });

    test("should return 0 if no rolls have been made", () => {
      const roller = new Roller(6);
      expect(roller.last()).toBe(0);
    });
  });

  describe("distribution", () => {
    test("should return the distribution of rolls", () => {
      const roller = new Roller(3);
      roller.roll(1);
      roller.roll(2);
      roller.roll(3);
      roller.roll(2);
      expect(roller.distribution().get(1)).toBe(1);
      expect(roller.distribution().get(2)).toBe(2);
      expect(roller.distribution().get(3)).toBe(1);
    });

    test("should return a Map with keys for all possible faces", () => {
      const roller = new Roller(4);
      expect(roller.distribution().get(1)).toBe(undefined);
      expect(roller.distribution().get(2)).toBe(undefined);
      expect(roller.distribution().get(3)).toBe(undefined);
      expect(roller.distribution().get(4)).toBe(undefined);
    });
  });
});
