import Button from 'components/Button';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import * as S from './styles';

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        label="Name"
        placeholder="name"
        initialValue="John Cage"
      />
      <TextField
        name="email"
        type="email"
        label="E-mail"
        placeholder="E-mail"
        initialValue="johncage@gmail.com"
        disabled
      />

      <TextField
        name="password"
        type="password"
        label="Password"
        placeholder="Type your password"
      />
      <TextField
        name="new_password"
        type="password"
        label="New Password"
        placeholder="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
);

export default FormProfile;
