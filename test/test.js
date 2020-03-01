import healthLevel from '../src/index';

test("Testing health", () => {
  const hero = {
    name: "Гам",
    health: 50,
  };

  const received = healthLevel(hero);
  const expected = "wounded";

  const hero2 = {
    name: "bam",
    health: 14,
  };

  const received2 = healthLevel(hero2);
  const expected2 = "critical";

  const hero3 = {
    name: "aaa",
    health: 80,
  };

  const received3 = healthLevel(hero3);
  const expected3 = "healthy";
  expect(received).toBe(expected);
  expect(received2).toBe(expected2);
  expect(received3).toBe(expected3);
});
