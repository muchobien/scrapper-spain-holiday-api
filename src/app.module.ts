import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { ScrapperService } from "./scrapper/scrapper.service";
import { HttpModule } from "@nestjs/axios";
@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  providers: [ScrapperService],
})
export class AppModule {}
