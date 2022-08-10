import { sum } from '../src/index.js'

it("should add 2 two things return result", () => {
    //Arrange
    const a = 4,
        b = 5,
        expected = 9;

    //Act
    const actual = sum(a, b);

    //Assert
    expect(actual).toBe(expected);
});
it("should add 2 two things return result", () => {
    //Arrange
    const a = null,
        b = 5,
        expected = "The input is incorect!";

    //Act
    const actual = sum(a, b);

    //Assert
    expect(actual).toBe(expected);
});

it("should add num and string and return error", () => {
    //Arrange
    const a = 'str',
        b = 5,
        expected = "are allowed";

    //Act
    const actual = sum(a, b);

    //Assert
    expect(actual).toContain(expected);
});
