import { prop, getModelForClass } from "@typegoose/typegoose";

export class URL {
  @prop({ required: true })
  public hash?: string;

  @prop({ required: true })
  public originalURL?: string;

  @prop({ required: true })
  public shortner?: string;
}

export const URLmodel = getModelForClass(URL);
