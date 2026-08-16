const API_URL = import.meta.env.VITE_API_URL || 'https://prod.api.arrotechsolutions.com';

export const apiService = {
    getBlogPosts: async (params?: { page?: number; per_page?: number; category?: string; search?: string; featured?: boolean }) => {
        let url = `${API_URL}/api/blog/posts`;
        if (params) {
            const queryParams = new URLSearchParams();
            if (params.page !== undefined) queryParams.append('page', params.page.toString());
            if (params.per_page !== undefined) queryParams.append('per_page', params.per_page.toString());
            if (params.category) queryParams.append('category', params.category);
            if (params.search) queryParams.append('search', params.search);
            if (params.featured !== undefined) queryParams.append('featured', params.featured.toString());
            url += `?${queryParams.toString()}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch blog posts');
        }
        return response.json();
    },

    getBlogPost: async (slug: string) => {
        const response = await fetch(`${API_URL}/api/blog/posts/${slug}`);
        if (!response.ok) {
            throw new Error('Failed to fetch blog post');
        }
        return response.json();
    },

    getBlogCategories: async () => {
        const response = await fetch(`${API_URL}/api/blog/categories`);
        if (!response.ok) {
            throw new Error('Failed to fetch blog categories');
        }
        return response.json();
    },
};
