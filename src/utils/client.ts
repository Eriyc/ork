import {createClient} from '@supabase/supabase-js';
import {SUPABASE_ANON_KEY, SUPABASE_URL} from 'react-native-dotenv';
import {storage} from './storage';

const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {detectSessionInUrl: false, storage: storage},
});

export default client;
