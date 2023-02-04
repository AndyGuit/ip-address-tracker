import { useState, useEffect } from 'react';
import ipify from '../apis/ipify';

const useIPAddressTracker = searchValue => {
  const [address, setAddress] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    search(searchValue);
  }, [searchValue]);

  const search = async value => {
    const isIp = value.match('^[.0-9]*$');
    const param = isIp ? 'ipAddress' : 'domain';

    try {
      setIsLoading(true);
      setErrorMsg('');
      const response = await ipify.get('/country,city', {
        params: {
          [param]: value,
        },
      });

      setAddress(response.data);
    } catch (error) {
      const apiError = error.response?.data?.messages;
      const axiosError = error.message;

      setErrorMsg(apiError || axiosError);
    } finally {
      setIsLoading(false);
    }
  };

  return [address, search, isLoading, errorMsg];
};

export default useIPAddressTracker;
