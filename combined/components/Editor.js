import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

export default function App(props) {
  return (
      <CodeMirror
        height="450px"
        value={props.code}
        extensions={[python()]}
        onChange={(value, viewUpdate) => {
          props.setCode(value);
        }}
      />
  );
}
