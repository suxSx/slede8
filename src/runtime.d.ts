export declare type State = {
    pc: number;
    flag: boolean;
    regs: Uint8Array;
    memory: Uint8Array;
    stdout: Uint8Array;
    inputPtr: number;
};
export declare function step(executable: Uint8Array, stdin: Uint8Array, maxTicks?: number): Generator<State, State>;
