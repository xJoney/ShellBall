const { init } = require('dcp-client');
const compute = require('dcp/compute');

async function main() {
    try {
        console.log("Initializing DCP client...");
        await init('https://scheduler.distributed.computer');
        console.log("DCP client initialized.");

        // Data and work function
        const data = [1, 53, 2, 12];
        function workFunction(datum) {
            // Return the square of the number passed in
            progress();
            return datum * datum;
        }

        // Create and execute the job
        const job = compute.for(data, workFunction);
        const results = await job.exec();
        console.log("Job executed successfully. Results:");
        console.log(Array.from(results));
    } catch (error) {
        console.error("Error executing DCP job:", error);
    }
}

main().catch(console.error);