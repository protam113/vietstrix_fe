/**
 * ==========================
 *  @CONTACT_FROM
 * ==========================
 */

export interface ContactForm_Data {
  name: string;
  email: string;
  phone_number: string;
  link: string | null;
  message: string;
}

// ========================
// End CONTACT_FROM
// ========================

/**
 * ==========================
 *  @SEO
 * ==========================
 */

export interface SeoData {
  site_title: string;
  site_description: string;
  keywords: string[];
  domain: string;
}

export interface UpdateSeo {
  site_title?: string;
  site_description?: string;
  domain?: string;
  keywords?: string[];
  google_analytics_id?: string;
  gtm_id?: string;
  facebook_pixel_id?: string;
  search_console_verification?: string;
}
