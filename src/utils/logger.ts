import Logger from "pino";
import dayjs from "dayjs";
import pinoPretty from "pino-pretty";

const log = Logger({
    prettifier: pinoPretty,
    base: {
        pid: false,
    }, 
    timestamp: () => `,"time":"${dayjs().format()}"`,
})

export default log;