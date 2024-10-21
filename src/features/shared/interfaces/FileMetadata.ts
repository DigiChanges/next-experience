export interface FileMetadata {
  id: string;
  originalFileId: string;
  versionUUID: string;
  name: string;
  originalName: string;
  mimeType: string;
  path: string;
  extension: string;
  size: number;
  version: number;
  isPublic: boolean;
  createdAt: number;
  updatedAt: number;
}
