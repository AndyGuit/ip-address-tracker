import { useState, useEffect } from 'react';
import ipify from '../apis/ipify';
import local from '../country.json';

const useIPAddressTracker = searchValue => {
  const [address, setAddress] = useState({});

  useEffect(() => {
    search(searchValue);
  }, [searchValue]);

  const search = async value => {
    const isIp = value.match('^[.0-9]*$');
    const param = isIp ? 'ipAddress' : 'domain';

    try {
      const response = await ipify.get('/country,city', {
        params: {
          [param]: value,
        },
      });

      setAddress(response.data);
    } catch (error) {
      console.log(error);

      setAddress(local);
    }
  };

  return [address, search];
};

export default useIPAddressTracker;
