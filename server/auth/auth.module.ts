import { MCVProvider } from "@/config/api/auth";

// ---------- Authentication Module ----------
export async function ChulaLogin(credential: CUAuth.CUCredentials): Promise<CUAuth.CUAuthResponse> {
    const result = await fetch(MCVProvider.login, {
        method: 'POST',
        body: JSON.stringify(credential),
    }).then(res => res.json()) as CUAuth.CUAuthResponse
    return {
        id: result.id,
        message: result.message,
        session: result.session,
        success: result.success
    } as CUAuth.CUAuthResponse
}