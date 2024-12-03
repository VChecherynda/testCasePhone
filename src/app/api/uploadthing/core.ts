import { createUploadthing, type FileRouter } from "uploadthing/next";
import z from "zod";
import sharp from "sharp";
import { db } from "@/db";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .input(
      z.object({
        configId: z.string().optional(),
      }),
    )
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input;

      const res = await fetch(file.url);
      const buffer = await res.arrayBuffer();

      const imgMetadata = await sharp(buffer).metadata();
      const { width, height } = imgMetadata;

      if (!configId) {
        try {
          const configuration = await db.configuration.create({
            data: {
              imgUrl: file.url,
              width: width || 500,
              height: height || 500,
            },
          });

          return { configId: configuration.id };
        } catch (e) {
          console.error(e);
        }
      } else {
        const updatedConfiguration = await db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImageUrl: file.url,
          },
        });

        return { configId: updatedConfiguration.id };
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
