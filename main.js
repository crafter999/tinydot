const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env');

function microenv(){
   try {
      const envData = fs.readFileSync(envPath, 'utf8');
      const envLines = envData.split('\n');
    
      const envVariables = {};
      for (const line of envLines) {
        const [key, value] = line.split('=');
        if (key && value) {
          envVariables[key.trim()] = value.trim();
        }
      }
    
      console.log(envVariables)
      return envVariables
    } catch (error) {
      console.error(error)
      return null
    }
}

module.exports = microenv