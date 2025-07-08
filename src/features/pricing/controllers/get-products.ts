import { createSupabaseServerClient } from '@/core/database/supabase/supabase-server-client';

export async function getProducts() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { referencedTable: 'prices' });
  console.log(error?.message);
  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}
