/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotaCreateFormInputValues = {
    note?: string;
};
export declare type NotaCreateFormValidationValues = {
    note?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotaCreateFormOverridesProps = {
    NotaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    note?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotaCreateFormProps = React.PropsWithChildren<{
    overrides?: NotaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotaCreateFormInputValues) => NotaCreateFormInputValues;
    onSuccess?: (fields: NotaCreateFormInputValues) => void;
    onError?: (fields: NotaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotaCreateFormInputValues) => NotaCreateFormInputValues;
    onValidate?: NotaCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotaCreateForm(props: NotaCreateFormProps): React.ReactElement;
