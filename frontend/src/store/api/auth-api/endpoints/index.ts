import oauthApi from '..';

const authApiEndpoints = oauthApi
  .enhanceEndpoints({
    addTagTypes: ['User'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      signInWitOauthYa: builder.mutation({
        query: (body) => ({
          url: 'oauth/yandex/redirect',
          method: 'POST',
          body,
        }),
      }),
      signOut: builder.mutation<void, void>({
        query: () => ({
          url: 'oauth/logout',
          method: 'POST',
        }),
      }),
    }),
  });

export const { useSignOutMutation, useSignInWitOauthYaMutation } = authApiEndpoints;
export { authApiEndpoints };
