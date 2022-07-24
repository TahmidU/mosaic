export type SocialTypes = "external" | "facebook" | "instagram" | "twitter";

export interface Partial<ISocials> {
  facebook_id: ?string;
  instagram_id: ?string;
  twitter_id: ?string;
}
