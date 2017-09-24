declare module '*.json' {
    const value: any
    export default value
}

interface Process {
    env: any
}

declare var process: Process