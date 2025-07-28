"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { runFlow } from '@genkit-ai/next/client';
import { recommendVMConfiguration, RecommendVMConfigurationOutput } from '@/ai/flows/recommend-vm-configuration';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles, Terminal } from 'lucide-react';

const formSchema = z.object({
  systemLoad: z.number().min(0).max(100),
  userFeedback: z.string().min(10, 'Please provide some feedback (min. 10 characters).'),
  machinePerformanceMetrics: z.string().min(10, 'Please provide some metrics (min. 10 characters).'),
  userRole: z.enum(['developer', 'tester', 'administrator']),
  costEffectivenessPreference: z.enum(['high', 'medium', 'low']),
  applicationsRunning: z.string().min(5, 'List at least one application.'),
});

type FormValues = z.infer<typeof formSchema>;

export function AiRecommendation() {
  const [result, setResult] = useState<RecommendVMConfigurationOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      systemLoad: 50,
      userFeedback: 'The current VM feels a bit sluggish when running builds.',
      machinePerformanceMetrics: 'CPU at 80% during peak, Memory at 75%, Disk I/O is high.',
      userRole: 'developer',
      costEffectivenessPreference: 'medium',
      applicationsRunning: 'VSCode, Docker, Chrome, Slack',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await runFlow(recommendVMConfiguration, values);
      setResult(res);
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-background/50">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-primary w-6 h-6" />
              <span>AI-Powered Recommendations</span>
            </CardTitle>
            <CardDescription className="mt-1">
              Get an optimal VM configuration based on your usage.
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="ai-toggle" className="text-sm font-medium">
              {show ? 'Hide' : 'Show'}
            </Label>
            <Switch id="ai-toggle" checked={show} onCheckedChange={setShow} />
          </div>
        </div>
      </CardHeader>
      {show && (
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="systemLoad"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>System Load: {field.value}%</FormLabel>
                        <FormControl>
                          <Slider
                            min={0}
                            max={100}
                            step={1}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="userRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="tester">Tester</SelectItem>
                            <SelectItem value="administrator">Administrator</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="costEffectivenessPreference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cost Preference</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select cost preference" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="userFeedback"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User Feedback</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., 'Sluggish during builds'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="machinePerformanceMetrics"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Performance Metrics</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., 'CPU at 80%'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="applicationsRunning"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Applications Running</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., 'VSCode, Docker'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Get Recommendation
                </Button>
              </div>
            </form>
          </Form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <Alert className="mt-6">
              <Terminal className="h-4 w-4" />
              <AlertTitle className="font-bold">AI Recommendation</AlertTitle>
              <AlertDescription>
                <p className="font-semibold mt-2">Recommended Configuration:</p>
                <p className="text-sm">{result.recommendedConfiguration}</p>
                <p className="font-semibold mt-4">Justification:</p>
                <p className="text-sm">{result.justification}</p>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      )}
    </Card>
  );
}
