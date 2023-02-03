import { useState, useEffect } from 'react';
import ipify from '../apis/ipify';

const useIPAddressTracker = searchValue => {
  const [address, setAddress] = useState({});

  useEffect(() => {
    search(searchValue);
  }, [searchValue]);

  const search = async value => {
    const isIp = value.match('^[.0-9]*$');
    const param = isIp ? 'ipAddress' : 'domain';

    const response = await ipify.get('/country,city', {
      params: {
        [param]: value,
      },
    });

    setAddress(response.data);
  };

  return [address, search];
};

export default useIPAddressTracker;
