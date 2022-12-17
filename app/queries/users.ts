import { Alert } from 'react-native';
import { supabase } from '@/services/supabase-client';

export type UserProfile = {
  id: string;
  email: string;
  first_name: string | undefined;
  last_name: string | undefined;
  username: string;
};

export const getUserProfile = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new Error(`Error ${error.code}: ${error.message}`);
    if (data !== null) {
      return data as UserProfile;
    }
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('An error occured', error.message);
    }
    console.error(error);
  }
  return null;
};
