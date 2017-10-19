enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

enum ShapeKind {
    Circle = "circle",
    Square = "square"
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

type Shape = Circle | Square;