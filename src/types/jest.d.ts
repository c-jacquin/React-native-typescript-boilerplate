declare var jasmine: any

declare function afterEach(fn: any): any
declare function beforeEach(fn: any): any
declare function describe(name: string, fn: any): void
declare var it: {
    (name: string, fn: any): void
    only: (name: string, fn: any) => void
}
declare function expect(val: any): Expect
declare var jest: Jest
declare function pit(name: string, fn: any): void
declare function spyOn(obj: any, key: string): any
declare function xdescribe(name: string, fn: any): void
declare function xit(name: string, fn: any): void

interface Expect {
    not: Expect
    toThrow(message?: string): void
    toThrowError(message?: string): void
    toBe(value: any): void
    toEqual(value: any): void
    toBeFalsy(): void
    toBeTruthy(): void
    toBeNull(): void
    toBeUndefined(): void
    toBeDefined(): void
    toMatch(regexp: RegExp): void
    toContain(string: string): void
    toBeCloseTo(number: number, delta: number): void
    toBeGreaterThan(number: number): void
    toBeLessThan(number: number): void
    toBeCalled(): void
    toBeCalledWith(...arguments: any[]): void
    lastCalledWith(...arguments: any[]): void
}

interface Jest {
    autoMockOff(): void
    autoMockOn(): void
    clearAllTimers(): void
    dontMock(moduleName: string): void
    genMockFromModule(moduleObj: string): object
    genMockFunction(): MockFunction
    genMockFn(): MockFunction
    mock(moduleName: string): void
    runAllTicks(): void
    runAllTimers(): void
    runOnlyPendingTimers(): void
    setMock(moduleName: string, moduleExports: object): void
}

interface MockFunction {
    (...arguments: any[]): any
    mock: {
        calls: Array<Array<any>> // tslint:disable-line
        instances: object[]
    }
    mockClear(): void
    mockImplementation(fn: () => void): MockFunction
    mockImpl(fn: () => void): MockFunction
    mockReturnThis(): MockFunction
    mockReturnValue(value: any): MockFunction
    mockReturnValueOnce(value: any): MockFunction
}

// Allow importing jasmine-check
declare module 'jasmine-check' {
    export function install(global?: any): void
}
declare var check: any
declare var gen: any
