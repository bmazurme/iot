import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { useGetUserByIdQuery } from '../../store';

export default function UserLayout() {
  const params = useParams();
  const navigate = useNavigate();
  const { error } = useGetUserByIdQuery(params.id!);

  useEffect(() => {
    if (error && (error as FetchBaseQueryError & { status: number; }).status === 404) {
      navigate('/not-found-page');
    }
  }, [params.id, (error as FetchBaseQueryError & { status: number; })?.status]);

  return (
    <div>123</div>
  );
}
