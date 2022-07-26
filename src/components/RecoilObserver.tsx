import { useEffect } from "react";
import { useRecoilValue } from "recoil";

interface RecoilObserverProps {
    node: any,
    onChange: any
}

export const RecoilObserver: React.FC<RecoilObserverProps> = ({node, onChange}) => {
    const value = useRecoilValue(node);
    useEffect(() => onChange(value), [onChange, value]);
    return null;
};