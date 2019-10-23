var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(age, breed) {
        this.age = age;
        this.breed = breed;
    }
    Animal.prototype.makeSound_ = function (sound) {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(age, breed) {
        return _super.call(this, age, breed) || this; // call parent constructor
    }
    Dog.prototype.makeSound = function () {
        _super.prototype.makeSound_.call(this, 'woof woof');
    };
    Dog.prototype.getAgeInHumanYears = function () {
        return this.age * 7; // super.age will throw error
    };
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (!name || name.length > 20) {
                throw new Error('Name invalid');
            }
            else {
                this._name = name;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(age, breed) {
        return _super.call(this, age, breed) || this;
    }
    Cat.prototype.makeSound = function () {
        _super.prototype.makeSound_.call(this, 'meow meow');
    };
    return Cat;
}(Animal));
var b = new Dog(14, "biscuit");
b.name = "Fido";
console.log(b.name);
b.makeSound();
//console.log(a.makeSound())
