import React from 'react';
import { Text, Input, Title, Layout, Form, Button } from '@/components';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '@/contexts/auth-context';
import { useTranslation } from 'react-i18next';

type FormValues = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const { t } = useTranslation();
  const { loginWithEmailAndPassword, registerWithEmailAndPassword } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const register = ({ email, password }: FormValues) =>
    registerWithEmailAndPassword(email, password);

  const login = ({ email, password }: FormValues) =>
    loginWithEmailAndPassword(email, password);

  return (
    <Layout>
      <Form>
        <Title>{t('common:ork')}</Title>
      </Form>
      <Form>
        <Text>{t('auth:authRequired')}</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              autoCapitalize="none"
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={t('common:email')}
            />
          )}
          name="email"
        />
        {errors.email && <Text>{t('common:required')}</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              secureTextEntry
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={t('common:password')}
              keyboardType="web-search"
            />
          )}
          name="password"
        />
        {errors.password && <Text>{t('common:required')}</Text>}
        <Button variant="primary" onPress={handleSubmit(login)}>
          {t('common:login')}
        </Button>
        <Button variant="secondary" onPress={handleSubmit(register)}>
          {t('common:register')}
        </Button>
        <Button variant="danger">{t('auth:google')}</Button>
      </Form>
    </Layout>
  );
};
