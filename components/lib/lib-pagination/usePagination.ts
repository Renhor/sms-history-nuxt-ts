import { computed, ComputedRef, Ref, ref } from '@nuxtjs/composition-api';

export interface PaginationHookProps<T = any[]> {
  list: Ref<T>;
  initialPage?: number;
  perPage: number;
}

export interface PaginationHookReturn<T = any[]> {
  currentList: ComputedRef<T>;
  totalPages: ComputedRef<number>;
  setPage: (page: number) => void;
}

export interface PaginationHook<T = any> {
  (props: PaginationHookProps<T>): PaginationHookReturn<T>
}

export const usePagination: PaginationHook = ({ list, initialPage, perPage }) => {
  initialPage = initialPage ?? 1;

  const currentPage = ref(initialPage);

  const totalPages = computed(() => {
    return Math.ceil(list.value.length / perPage);
  });

  const currentList = computed(() => {
    const offset = (currentPage.value - 1) * perPage;

    return list.value.slice(offset, perPage + offset);
  });

  const setPage = (newPage: number) => {
    currentPage.value = newPage;
  };

  return {
    currentList,
    totalPages,
    setPage,
  };
};


