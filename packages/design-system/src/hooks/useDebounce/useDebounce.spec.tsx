import { renderHook, act } from '@testing-library/react';
import { useEffect, useState } from 'react';

import { useDebounce } from './useDebounce';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('useDebounce()', () => {
  it('should debounce funtion calls', async () => {
    const mockedValue = 'Query Test';
    const mockedInitialValue = '';
    const mockedDebouncedTime = 1000;

    const { result } = renderHook(() => {
      const [search, setSearch] = useState<string>(mockedInitialValue);
      const debouncedSearchTerm = useDebounce(search, mockedDebouncedTime);

      useEffect(() => {
        setSearch(mockedValue);
      }, []);

      return debouncedSearchTerm;
    });

    // Checks if the setTimeOut was properly called, with the right time
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), mockedDebouncedTime);

    // Checks if the current value is still there, waiting for the timeOut to be changed
    expect(result.current).toBe(mockedInitialValue);

    // Fast forwards the timeout to be called immediately
    act(() => {
      jest.runOnlyPendingTimers();
    });

    // Checks if the final value is changed, after the timeOut only
    expect(result.current).toBe(mockedValue);
  });
});
