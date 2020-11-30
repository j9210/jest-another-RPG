const { TestScheduler } = require('jest');
const Enemy = require('../lib/Enemy');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

// test for getHealth
test("gets enemy's health value", () => {
    const player = new Enemy('goblin', 'sword');
  
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
  });

// test for isAlive()
test('checks if enemy is alive or not', () => {
    const player = new Enemy('goblin', 'sword');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

// test to get a player attack value
test("gets enemy's attack value", () => {
    const player = new Enemy('goblin', 'sword');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

// test for health subtraction
test("subtracts from enemy's health", () => {
    const player = new Enemy('goblin', 'sword');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

// test for enemy description
test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
})