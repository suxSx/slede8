declare type Labels = {
    [label: string]: number;
};
export declare type InstructionInfo = {
    lineNumber: number;
    address: number;
    raw: string;
};
declare type SourceMap = {
    instructions: InstructionInfo[];
    labels: Labels;
};
export declare type Instruction = {
    opCode: string;
    args: string[];
};
export declare type DebugInfo = {
    [address: number]: InstructionInfo;
};
export declare type Target = {
    exe: Uint8Array;
    pdb: DebugInfo;
};
declare function preprosess(sourceCode: string): SourceMap;
declare function tokenize(raw: string): Instruction;
export declare function assemble(sourceCode: string): Target;
declare function u16(value: number): Uint8Array;
declare function nibs(nib1: number, nib2: number, nib3: number, nib4: number): Uint8Array;
declare function nibsByte(nib1: number, nib2: number, byte: number): Uint8Array;
declare function nibVal(nib: number, val: number): Uint8Array;
declare function isVal(valStr: string): boolean;
declare function getVal(valStr: string): number;
declare function getReg(regStr: string): number;
declare function getAddr(addrStr: string, labels: Labels): number;
export declare const __internals: {
    u16: typeof u16;
    nibs: typeof nibs;
    nibsByte: typeof nibsByte;
    nibVal: typeof nibVal;
    isVal: typeof isVal;
    getVal: typeof getVal;
    getAddr: typeof getAddr;
    getReg: typeof getReg;
    preprosess: typeof preprosess;
    tokenize: typeof tokenize;
};
export {};
