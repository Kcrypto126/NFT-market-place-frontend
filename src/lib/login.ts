'use client';
import { createThirdwebClient } from 'thirdweb';

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_ID!;

export const client = createThirdwebClient({ clientId });
