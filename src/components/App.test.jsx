describe("addToList", () => {
  beforeEach(() => {
    // Reset the toDoList before each test
    toDoList = [];
  });

  it("should add a new item to the toDoList", () => {
    // Arrange
    document.querySelector(".inputItem").value = "Buy groceries";

    // Act
    addToList();

    // Assert
    expect(toDoList.length).toBe(1);
    expect(toDoList[0].nameTodo).toBe("Buy groceries");
    expect(toDoList[0].status).toBe(false);
  });

  it("should not add an empty item to the toDoList", () => {
    // Arrange
    document.querySelector(".inputItem").value = "";

    // Act
    addToList();

    // Assert
    expect(toDoList.length).toBe(0);
  });
});
