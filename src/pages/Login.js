import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import {SheetFooter} from 'components/SheetFooter/SheetFooter.jsx';
export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div style={{position: 'relative'}}>
        <LoginForm />
        <SheetFooter />
      </div>
    </div>
  );
}