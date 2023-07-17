import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { SheetFooter } from 'components/SheetFooter/SheetFooter';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div style={{position: 'relative'}}>
        <RegisterForm />
        <SheetFooter />
      </div>
    </div>
  );
}