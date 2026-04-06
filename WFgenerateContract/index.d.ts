import React from 'react';
interface Position {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
interface WFgenerateContractProp extends Position {
    onCompelete: (value: Blob) => void;
    getStatus?: (value: boolean) => void;
    getSignFile?: (value: File) => void;
    getPdfFile?: (value: File) => void;
}
declare const WFgenerateContract: React.FC<WFgenerateContractProp>;
export default WFgenerateContract;
