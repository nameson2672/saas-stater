// Database - Client-side and middleware exports only
export { createSupabaseClient } from './supabase/supabase-client';
export { createSupabaseMiddlewareClient, updateSession } from './supabase/supabase-middleware-client';
export * from './supabase/types';

// Server-side exports are imported directly from their specific files to prevent
// server-only code from being bundled with client components