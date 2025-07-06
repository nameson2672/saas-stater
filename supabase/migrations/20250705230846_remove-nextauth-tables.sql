-- Remove NextAuth.js tables and use Supabase Auth instead

-- Drop tables in correct order (handle foreign keys)
DROP TABLE IF EXISTS sessions CASCADE;
DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS verification_tokens CASCADE;
DROP TABLE IF EXISTS user_profiles CASCADE;

-- Drop indexes
DROP INDEX IF EXISTS accounts_user_id_idx;
DROP INDEX IF EXISTS sessions_user_id_idx;
DROP INDEX IF EXISTS sessions_session_token_idx;
DROP INDEX IF EXISTS verification_tokens_identifier_idx;
DROP INDEX IF EXISTS verification_tokens_token_idx;

-- Drop the trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();