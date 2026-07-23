import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Easter egg para devs curiosos
console.log(
  `%c
  ███████╗██╗  ██╗███╗   ███╗ ██████╗ ██╗     
  ██╔════╝██║  ██║████╗ ████║██╔═══██╗██║     
  ███████╗███████║██╔████╔██║██║   ██║██║     
  ╚════██║╚════██║██║╚██╔╝██║██║   ██║██║     
  ███████║     ██║██║ ╚═╝ ██║╚██████╔╝███████╗
  ╚══════╝     ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝
  `,
  "color: #c0421b; font-family: monospace; font-size: 10px;"
);
console.log(
  `%cJajajaja q haces viendo esto?\n` +
  `%cContactame y hagamos parche\n\n` +
  `zaratesamu99@gmail.com\n` +
  `linkedin.com/in/s4m0l\n` +
  `github.com/s4mooel`,
  "color: #1a1a1a; font-size: 14px; font-weight: bold;",
  "color: #c0421b; font-size: 13px;"
);
console.log(
  `%c
   ██████╗  █████╗ ███████╗██╗███████╗
  ██╔═══██╗██╔══██╗██╔════╝██║██╔════╝
  ██║   ██║███████║███████╗██║███████╗
  ██║   ██║██╔══██║╚════██║██║╚════██║
  ╚██████╔╝██║  ██║███████║██║███████║
   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚══════╝
  `,
  "color: #00bfff; font-family: monospace; font-size: 10px;"
);
console.log(
  `%cDigsy's Dinner\n\n` +
  `%cWhat a life it would be\n` +
  `If you would come to mine for tea\n` +
  `I'll pick you up at half past three\n` +
  `We'll have lasagna\n\n` +
  `I'll treat you like a Queen\n` +
  `I'll give you strawberries and cream\n` +
  `Then your friends will all go green\n` +
  `For my lasagna\n\n` +
  `These could be the best days of our lives\n` +
  `But I don't think we've been living very wise\n` +
  `Oh no, no\n\n` +
  `What a life it would be\n` +
  `If you would come to mine for tea\n` +
  `I'll pick you up at half past three\n` +
  `We'll have lasagna\n\n` +
  `These could be the best days of our lives\n` +
  `But I don't think we've been living very wise\n` +
  `I said oh no, no\n\n` +
  `What a life it would be\n` +
  `If you would come to mine for tea\n` +
  `I'll pick you up at half past three\n` +
  `We'll have lasagna\n\n` +
  `Then your friends will all go green\n` +
  `Then your friends will all go green\n` +
  `Then your friends will all go green\n` +
  `For my lasagna`,
  "color: #00bfff; font-size: 14px; font-weight: bold;",
  "color: #888; font-size: 12px; font-style: italic; line-height: 1.6;"
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
