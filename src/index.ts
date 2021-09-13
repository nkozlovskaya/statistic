import {MatchReader} from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

// Create an object that implementents the DataReader interface
// const csvFileReader = new CsvFileReader('footbal.csv');

//Create an object of MatchReader and pass DataReader implementation
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();


// const summary = new Summary( new WinsAnalysis('Man United'), new ConsoleReport());
//  const summary = new Summary( new WinsAnalysis('Man United'), new HtmlReport());
const summary1 = Summary.withAnalysisWithHtmlReport('Man United');
summary1.buildAndPrintReport(matchReader.matches);

