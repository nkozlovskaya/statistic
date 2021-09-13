"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an object that implementents the DataReader interface
// const csvFileReader = new CsvFileReader('footbal.csv');
//Create an object of MatchReader and pass DataReader implementation
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary( new WinsAnalysis('Man United'), new ConsoleReport());
//  const summary = new Summary( new WinsAnalysis('Man United'), new HtmlReport());
var summary1 = Summary_1.Summary.withAnalysisWithHtmlReport('Man United');
summary1.buildAndPrintReport(matchReader.matches);
