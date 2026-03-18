import { useState } from "react";
import { Star } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  created_at: string;
}

const StarRating = ({
  rating,
  onRate,
  interactive = false,
}: {
  rating: number;
  onRate?: (r: number) => void;
  interactive?: boolean;
}) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={interactive ? 24 : 16}
          className={`${
            star <= (hover || rating)
              ? "fill-primary text-primary"
              : "text-muted-foreground"
          } ${interactive ? "cursor-pointer transition-colors" : ""}`}
          onMouseEnter={() => interactive && setHover(star)}
          onMouseLeave={() => interactive && setHover(0)}
          onClick={() => interactive && onRate?.(star)}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Review[];
    },
  });

  const submitReview = useMutation({
    mutationFn: async () => {
      const trimmedName = name.trim();
      const trimmedText = text.trim();
      if (!trimmedName || !trimmedText || rating === 0) {
        throw new Error("Please fill in all fields and select a rating.");
      }
      if (trimmedName.length > 100 || trimmedText.length > 1000) {
        throw new Error("Name or review text is too long.");
      }
      const { error } = await supabase
        .from("reviews")
        .insert({ name: trimmedName, rating, text: trimmedText });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      setName("");
      setText("");
      setRating(0);
      toast({ title: "Thank you!", description: "Your review has been submitted." });
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  return (
    <section id="reviews" className="py-20 bg-foreground">
      <div className="container">
        <h2 className="text-4xl sm:text-5xl font-heading text-primary-foreground text-center mb-12">
          Customer <span className="text-primary">Reviews</span>
        </h2>

        {/* Submit Review Form */}
        <div className="max-w-lg mx-auto mb-16 bg-card rounded-lg p-6 border border-border">
          <h3 className="text-lg font-heading text-primary-foreground mb-4">
            Leave a Review
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">
                Your Name
              </label>
              <Input
                placeholder="John D."
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="bg-secondary text-primary-foreground border-border"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">
                Rating
              </label>
              <StarRating rating={rating} onRate={setRating} interactive />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">
                Your Review
              </label>
              <Textarea
                placeholder="Tell us about your experience..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={1000}
                className="bg-secondary text-primary-foreground border-border"
              />
            </div>
            <Button
              onClick={() => submitReview.mutate()}
              disabled={submitReview.isPending}
              className="w-full"
            >
              {submitReview.isPending ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </div>

        {/* Display Reviews */}
        {isLoading ? (
          <p className="text-center text-muted-foreground">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No reviews yet. Be the first!
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-0.5 mb-4">
                  <StarRating rating={r.rating} />
                </div>
                <p className="text-sm text-primary-foreground/70 mb-4 italic">
                  "{r.text}"
                </p>
                <span className="text-xs font-heading text-primary tracking-wider">
                  {r.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
