import {FC} from 'react';
import {Control, Controller} from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';

interface MDEditorHookFormProps {
  name: string;
  control: Control<any>;
}

export const MDEditorHookForm: FC<MDEditorHookFormProps> = ({
  name,
  control
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: { value, onChange }}) => (
        <MDEditor value={value} onChange={onChange} />
      )}
    />
  );
};
