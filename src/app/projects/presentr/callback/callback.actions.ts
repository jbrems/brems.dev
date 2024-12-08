'use server'

import { getTokens } from "@/lib/oauth.utils";

export async function getTokensAction(authorizationCode: string) {
  return getTokens(authorizationCode)
}