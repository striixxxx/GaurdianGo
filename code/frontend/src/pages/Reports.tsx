import { FileText, Download, Calendar, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const reportData = [
  {
    title: "Daily Safety Report",
    description: "Comprehensive daily overview of tourist safety metrics",
    lastGenerated: "2024-01-15 09:00:00",
    type: "Daily",
    format: "PDF",
    size: "2.4 MB",
  },
  {
    title: "Weekly Incident Analysis", 
    description: "Detailed analysis of incidents and response times",
    lastGenerated: "2024-01-14 18:00:00",
    type: "Weekly",
    format: "Excel",
    size: "1.8 MB",
  },
  {
    title: "Tourist Distribution Report",
    description: "Geographic distribution and movement patterns",
    lastGenerated: "2024-01-15 08:30:00",
    type: "Daily",
    format: "PDF",
    size: "3.1 MB",
  },
  {
    title: "Risk Zone Assessment",
    description: "Analysis of high-risk areas and safety recommendations",
    lastGenerated: "2024-01-13 16:00:00", 
    type: "Weekly",
    format: "PDF",
    size: "4.2 MB",
  },
];

const metrics = [
  { label: "Total Alerts This Week", value: "156", change: "+12%" },
  { label: "Most Common Alert Type", value: "Geo-fence Breach", change: "45%" },
  { label: "Average Resolution Time", value: "14 minutes", change: "-8%" },
  { label: "High-Risk Areas Visited", value: "23", change: "+5%" },
];

export default function Reports() {
  const handleDownload = (reportTitle: string) => {
    console.log(`Downloading report: ${reportTitle}`);
    
  };

  const handleGenerateReport = () => {
    console.log("Generating new report...");
    
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">Generate and download safety analytics reports</p>
        </div>
        <Button onClick={handleGenerateReport}>
          <FileText className="w-4 h-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      {/* Key Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Key Metrics Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                <h3 className="text-2xl font-bold text-foreground">{metric.value}</h3>
                <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
                <p className="text-xs text-success mt-2">{metric.change} from last period</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Available Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportData.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">{report.title}</h4>
                    <Badge variant="outline">{report.type}</Badge>
                    <Badge variant="secondary">{report.format}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {report.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Last generated: {report.lastGenerated}
                    </div>
                    <span>Size: {report.size}</span>
                  </div>
                </div>
                <Button className="bg-blue-400"
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDownload(report.title)}
                >
                  <Download className="w-4  h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}